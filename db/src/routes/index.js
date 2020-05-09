const Professor = require('../controllers/Professor');
const Subject = require('../controllers/Subject');
const Student = require('../controllers/Student');

const { token, auth } = require('../controllers/Authentication');

module.exports = (app) => {

    app
        .route('/login')
        .post(token)

    app
        .route('/professor')
        .all(auth().authenticate())
        .get(Professor.index)
        .post(Professor.create)

    app
        .route('/professor/:id')
        .get(Professor.search)
        .put(Professor.edit)
        .delete(Professor.delete)

    app
        .route('/subject')
        .get(Subject.index)

    app
        .route('/professor/:professor_id/subject/')
        .post(Subject.create)
    
    app
        .route('/subject/:id')
        .get(Subject.search)
        .put(Subject.edit)
        .delete(Subject.delete)

    app
        .route('/student')
        .get(Student.index)
        .post(Student.create)
    
    app
        .route('/student/:id')
        .get(Student.search)
        .put(Student.edit)
        .delete(Student.delete)

    app
        .route('/subject_students')
        .post(Subject.associateSubjectStudent)

};