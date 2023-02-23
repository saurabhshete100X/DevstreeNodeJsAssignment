const express = require("express")
const router = express.Router()
const userController = require("../controller/usercontroller")


const middleware = require("../middleware/auth")

router.get('/', (req, res) => {
  res.send('Hello, Devstree.com!');
});


//=====================UserApi======================================//

router.post("/register", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/user/:userId/profile", middleware.Authentication, middleware.Authorization, userController.getUser)
router.put("/user/:userId/profile", middleware.Authentication, middleware.Authorization, userController.updateUserProfile)


module.exports = router;