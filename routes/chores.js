import { Router } from 'express'
import * as choresCtrl from '../controllers/chores.js'

const router = Router ()

// GET ROUTER LISTING

router.get('/', choresCtrl.index)
router.get('/new', choresCtrl.new)
router.get('/:id', choresCtrl.show)

// POST ROUTER LISTING

router.post('/', choresCtrl.create)


export {
  router
}