// JavaScript Document
function ac(){
            document.getElementById("res").value = "";
        }

function show(input){
            document.getElementById("res").value += input;
        }

function cal(){
            try {
                // Using Function constructor instead of eval for safer evaluation
                var output = Function('return ' + document.getElementById("res").value)();
                document.getElementById("res").value = output;
            } catch (e) {
                document.getElementById("res").value = "Error";
                setTimeout(() => {
                    document.getElementById("res").value = "";
                }, 1000);
            }
        }

