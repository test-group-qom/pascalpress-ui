function init(){
  BindEvent();
  Global();
}
function Global(){

}

function BindEvent(){
  const tab                  = ".container.single .flex--tabs .menu_tab ul li";
  const English              = "#English";
  const persian              = "#persian";
  const tab_admin_enter_news = '._content--in .tabs li';

  $("body").on("click",".nav-opener",toggle_Humber);
  $("body").on("click",".flex--nav_top ul a",remove_event);
  $("body").on("click",tab,statusTab);
  $("body").on("click",tab_admin_enter_news,change_tab);
  $("body").on("click",English,fun_English);
  $("body").on("click",persian,fun_persian);
}
function toggle_Humber(){
  let elem = $(".flex--nav_top");
  elem.toggle(120);
}
function remove_event(){
  let elem     = $(".flex--nav_top");
  let win_wid  = $(window).width();
  if (win_wid <= 900 && win_wid >= 600 ) {
      elem.hide();
  }
}
function statusTab(){
  let tab       = $(".container.single .flex--tabs .menu_tab ul li");
  let item      = $(".container.single .flex--tabs .menu_tab .flex--descrption");
  let descrpion = $(".container.single .flex--tabs .menu_tab .flex---descrption .flex--descrption");
  let index     = $(this).index();

  tab.removeClass("selected");
  $(this).addClass("selected");
  item.hide();
  descrpion.hide();
  item.eq(index).show();
  descrpion.eq(index).show();
  $(".container.single .flex--tabs .menu_tab .flex--descrption:nth-child(3)").removeClass("display--none");
}
function change_tab(){
  let tab       = $("._content--in .tabs li");
  let item      = $("._content--in .desrcption");
  // let descrpion = $(".container.single .flex--tabs .menu_tab .flex---descrption .flex--descrption");
  let index     = $(this).index();

  tab.removeClass("selected");
  $(this).addClass("selected");
  item.hide();
  item.eq(index).show();
}
function fun_English(){
  const username = $(".flex--inputs .flex--input #Name");
  const Email    = $(".flex--inputs .flex--input #Email");
  const textarea = $(".flex--inputs #textarea");

  username.attr("placeholder","username");
  Email.attr("placeholder",'Email');
  textarea.attr("placeholder",'text in');
}
function fun_persian(){
  const username = $(".flex--inputs .flex--input #Name");
  const Email    = $(".flex--inputs .flex--input #Email");
  const textarea = $(".flex--inputs #textarea");

  username.attr("placeholder","نام کاربری");
  Email.attr("placeholder",'ایمیل');
  textarea.attr("placeholder",'متن مورد نظر');
}
















$(document).ready(init)
