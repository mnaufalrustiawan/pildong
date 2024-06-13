<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('Landing', [
    "name" => "PilihDong",
    "image"=> "logo PilihDong.png",
    "email" => "pilihdong.kpu.ac.id"
]);
});

Route::get('/home', function () {
    return view('Home', []);
});

Route::get('/voting', function () {
    return view('Voting');
});

Route::get('/profil', function () {
    return view('Profil');
});