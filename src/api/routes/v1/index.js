const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const profileRoutes = require('./profile.route');
const skillRoutes = require('./skill.route');
const userSkillRoutes = require('./userSkill.route');
const roleRoutes = require('./role.route');
const volunteerRoutes = require('./volunteer.route');
const resourceRoutes = require('./resource.route');
const projectRoutes = require('./project.route');
const placesRoutes = require('./places.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));
router.use('/uploads/user_images', express.static('uploads/user_images'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/skill', skillRoutes);
router.use('/userSkill', userSkillRoutes);
router.use('/role', roleRoutes);
router.use('/volunteer', volunteerRoutes);
router.use('/resource', resourceRoutes);
router.use('/project', projectRoutes);
router.use('/places', placesRoutes);

module.exports = router;
