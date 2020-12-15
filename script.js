var selectedFilter;

$(".apply-filter").click(function() {
    var filter = $("input").val();
    
  // As you're writing your if-statements, think to yourself: What is the condition? And what code should execute if the condition is met?
    
    // 1. Harlem - Let's do the first example together. Below is the code block we want to execute if the user types Harlem in the input. Make sure to uncomment the jQuery code.

        if(filter==="Harlem"){ $("img").css("filter", "contrast(115%) brightness(120%)");}

    // 2. Bushwick - Below is the code block we want to execute if the user types Bushwick in the input. 
    
      else  if(filter==="Bushwick"){ $("img").css("filter", "contrast(50%) brightness(180%)");}
    
    // 3. SOMA - Below is the code block we want to execute if the user types SOMA in the input. 
    
     else if(filter==="SOMA"){ $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");}
        
    // 4. Sunset - Below is the code block we want to execute if the user types Sunset in the input. 
    
     else   if (filter==="Sunset"){ $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");}
    
    
    else if (filter==="Safiya"){ $("img").css("filter", "contrast(125%) hue-rotate(-12deg) saturate(70%)");}
    
    
});

$(".reset").click(function() {
    $("img").css("filter", "");
    $("img").css("width", " ");
});


$('.change').click(function() {
    var size=$("sizeInput").val();
    
    
    $("img").css("width", size, + "px");
});






