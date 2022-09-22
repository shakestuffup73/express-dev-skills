import { Router } from 'express'
import * as choresCtrl from '../controllers/chores.js'

const router = Router ()

// GET ROUTER LISTING

router.get('/', choresCtrl.index)



export {
  router
}