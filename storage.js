document.getElementById("submitBtn").onclick = function() {
    var selectedFoods = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="food"]:checked');
    checkboxes.forEach(function(checkbox) {
        selectedFoods.push(checkbox.value);
    });
    var url = "Valentayms2.html?" + encodeURIComponent("selectedFoods") + "=" + encodeURIComponent(selectedFoods.join(","));
    window.location.href = url;
};
