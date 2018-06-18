<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'PollController@index');
Route::post('/poll/cast', 'PollController@cast');
Route::get('/poll/result', 'PollController@result');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
