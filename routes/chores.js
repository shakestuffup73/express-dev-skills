import { Router } from 'express'
import * as choresCtrl from '../controllers/chores.js'

const router = Router ()

// GET router

router.get('/', choresCtrl.index)
router.get('/new', choresCtrl.new)
router.get('/:id', choresCtrl.show)
router.get('/:id/edit', choresCtrl.edit)

// POST router

router.post('/', choresCtrl.create)

// DELETE router 

router.delete('/:id', choresCtrl.delete)

// PUT router

router.put('/:id', choresCtrl.update)


export {
  router
}