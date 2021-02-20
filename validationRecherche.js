/*
*   On dit que le champ recherche est vide
*
 */
    function clearErrorMessages() {
    document.getElementById("error_RechercheName").innerHTML = "";
}
    function validateInputField(inputId, spanId) {
    var value = document.getElementById(inputId).value;
    if (value === null || value === "") {
    document.getElementById(spanId).innerHTML = "Ce champ doit contenir une valeur!";
    return false;
}
    return true;
}
    function checkRequiredFields() {
    clearErrorMessages();
    var field1 = validateInputField("search", "error_RechercheName");
    return field1;
}
