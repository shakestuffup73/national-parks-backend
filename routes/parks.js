import { Router } from 'express'
import * as parkCtrl from '../controllers/parks.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/states/:stateCode', parkCtrl.getParksByState)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/change-password', checkAuth, authCtrl.changePassword)

export { router }
