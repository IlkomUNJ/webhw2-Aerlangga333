/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/', async ({ view }) => {
  return view.render('index')
})

router.get('/buyer', async ({ view }) => {
  return view.render('buyer')
})

router.get('/seller', async ({ view }) => {
  return view.render('seller')
})

router.get('/add-product', async ({ view }) => {
  return view.render('add_product')
})

router.get('/search', async ({ view }) => {
  return view.render('search')
})

router.get('/contact', async ({ view }) => {
  return view.render('contact')
})

router.get('/transaction', async ({ view }) => {
  return view.render('transaction')
})