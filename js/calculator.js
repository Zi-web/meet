function calc() {
      //получаем ссылку на элемент Select (Тип дизайна)
      var type_design = document.getElementById("type_design");
      //получаем ссылку на чекбокс (Требуется верстка?)
      var is_html = document.getElementById("is_html");
      //получаем ссылку на элемент input (Кол-во вариантов)
      var count = document.getElementById("count");
      /*var count = document.getElementsByClassName("count");*/
      //получаем ссылку на элемент span, в него будем писать стоимость дизайна
      var result = document.getElementById("result"); 
 
      var price = 0;
      
      price += parseInt(type_design.options[type_design.selectedIndex].value);
      price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
      price = parseInt(count.value) * price;

    
      result.innerHTML = price;
}