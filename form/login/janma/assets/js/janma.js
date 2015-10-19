/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {


    $("#form-register").hide();

    $("#signin").click(function () {
        $("#form-login").fadeIn();
        $("#form-register").hide();
    });

    $("#signup").click(function () {
        $("#form-login").hide();
        $("#form-register").fadeIn();
    });
});
