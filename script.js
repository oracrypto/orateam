function login() {
            let key = document.getElementById("activationKey").value;
            const errorMessage = document.getElementById("error-message");

           
            const keyMappings = {
              
              





























































                        
              "TRYCTGVHKBJV": "https://DRTFYrictor.blogspot.com/",
              "A3V5LFKFCN2": "https://qwert445.blogspot.com/",
              "KRVUH3FTYKR2": "https://oracrypto.github.io/cryptoruit/"
               
            };

            // التحقق من المفتاح المدخل
            if (keyMappings[key]) {
                window.location.href = keyMappings[key]; // إعادة التوجيه إلى الرابط المرتبط بالمفتاح
            } else {
                errorMessage.textContent = "Invalid activation key";
                errorMessage.style.display = "block";
            }
        }




document.addEventListener('click', function(event) {
    // تحقق إذا كان العنصر الذي تم الضغط عليه ليس حقل إدخال
    if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
       
    }
});
