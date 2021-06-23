//SlideShowBackground
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
var quantity=0;
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
//QUANTITIES

function test1(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("1").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("1").value = value;

 // document.getElementById("1").value = value;

}

function test(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("1").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("1").value = value;

};
function test2(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("2").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("2").value = value;

 // document.getElementById("1").value = value;

}

function tes2(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("2").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("2").value = value;

};
function test3(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("3").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("3").value = value;

 // document.getElementById("1").value = value;

}

function tes3(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("3").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("3").value = value;

};
function test4(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("4").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("4").value = value;

 // document.getElementById("1").value = value;

}

function tes4(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("4").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("4").value = value;

};
function test5(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("5").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("5").value = value;

 // document.getElementById("1").value = value;

}

function tes5(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("5").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("5").value = value;

};
function test6(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("6").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("6").value = value;

 // document.getElementById("1").value = value;

}

function tes6(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("6").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("6").value = value;

};
function test7(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("7").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("7").value = value;

 // document.getElementById("1").value = value;

}

function tes7(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("7").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("7").value = value;

};
function test8(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("8").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("8").value = value;

 // document.getElementById("1").value = value;

}

function tes8(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("8").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("8").value = value;

};
function test9(e) {
    var $this = $(this);
    var $input = $this.closest('div').find('input');
//    var value = .value;
    var value=document.getElementById("9").value;
//    console.log(value);
    value++;
    if(value>=10)
        {
            value=10;
        }
      document.getElementById("9").value = value;

 // document.getElementById("1").value = value;

}

function tes9(e){
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = document.getElementById("9").value;

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
   document.getElementById("9").value = value;

};

function last()
{
    var price=document.querySelectorAll("p");
    var or=0;
    var is=0;
for(var i=0;i<document.querySelectorAll("p").length;i++)
    {
     var x = document.getElementsByName("name")[i].id;
    if(document.getElementsByName("name")[i].value !=0)
        {
            or = Price(document.getElementsByName("name")[i].value,parseInt(price[i].innerText));
            is=is+or;
        }

    }
   alert("Your Total Bill is Rs "+is);
}
function Price(val,pr)
{
    return (val*pr);
}
