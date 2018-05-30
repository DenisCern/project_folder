
function GetResult(calc)
{ 
  var a = 0;
  var b = 0;
    	
  a = eval(calcform.f_num.value);   
  b = eval(calcform.s_num.value);   
  
  switch (calc)                       
  {                                   
    case 1:   
    {
      calcform.res.value = a + b;
      break;
    }
    case 2:   
    {
      calcform.res.value = a - b;
      break;
    }
    case 3:   
    {
      calcform.res.value = a * b;
      break;
    }
    case 4:   
    {
      calcform.res.value = a / b;
      break;
    }
  }
}
