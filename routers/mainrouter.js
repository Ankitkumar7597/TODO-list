const router=require('express').Router()
const todilistc=require('../controllers/todolistcontroller')




router.post('/',todilistc.tododata)

router.get('/',todilistc.tododatashow)
router.get('/delete/:id',todilistc.tododatadelete)
router.get('/edit/:id',todilistc.edittodolistdata)
router.post('/edit/:id',todilistc.editdataupdate)





module.exports=router