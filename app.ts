function mostrar(frm:any, num:any)
{
  if(num==0)
  {
    frm.txt1.style.visibility='visible';
    frm.txt2.style.visibility='hidden';
  }
  else
  {
    frm.txt1.style.visibility='hidden';
    frm.txt2.style.visibility='visible';
  }
}

function mensaje()
{
  document.getElementById('mostrar')!.innerHTML = "Documento Enviado";
  document.getElementById("mostrar")!.hidden = false;
}