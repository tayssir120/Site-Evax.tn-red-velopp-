const express =  require ('express')
const router  = express.Router()
const dashboardController = require("../controller/dashboardController")



router.get('/',dashboardController.index)
router.get('/diabetic_vaccinated_number',dashboardController.diabeticVaccinatedNumber)
router.get('/bloodPressure_vaccinated_number',dashboardController.bloodPressureVaccinatedNumber)
router.get('/chronicKidneyDisease_vaccinated_number',dashboardController.chronicKidneyDiseaseVaccinatedNumber)
router.get('/congestiveHeartFailure_vaccinated_number',dashboardController.congestiveHeartFailureVaccinatedNumber)
router.get('/VaccinatedNumber',dashboardController.VaccinatedNumber)
router.post('/admin/login',dashboardController.connectAdmin)


module.exports = router