$("#ctl00_ContentPlaceHolder1_chkSameAsShipping").change(function(){
   if(this.checked){ $('#ctl00_ContentPlaceHolder1_lblCountry').parent().hide();} 
   else {$('#ctl00_ContentPlaceHolder1_lblCountry').parent().show(); 
       $("#aspnetForm").trigger("reset");
   }
});
