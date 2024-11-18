// services/recruitmentService.js
const Application = require('../models/Application');
const PlacementDrive = require('../models/PlacementDrive');
const Student = require('../models/Student');

const getRecruitmentStats = async () => {
    const totalStudents = await Student.countDocuments();
    const totalPlaced = await Application.countDocuments({ status: 'Selected' });
    const totalApplications = await Application.countDocuments();
    const totalOffersAccepted = await Application.countDocuments({ status: 'Accepted' });

    const successRate = ((totalPlaced / totalStudents) * 100).toFixed(2);
    const offerAcceptanceRate = ((totalOffersAccepted / totalPlaced) * 100).toFixed(2);

    const placementDrives = await PlacementDrive.find()
        .populate('companiesParticipating')
        .select('title date companiesParticipating');

    return {
        totalStudents,
        totalPlaced,
        totalApplications,
        totalOffersAccepted,
        successRate,
        offerAcceptanceRate,
        placementDrives,
    };
};

module.exports = { getRecruitmentStats };
