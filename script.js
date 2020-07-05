function getHistory(){
    return document.getElementById("history-value").innerText;
}
// alert(getHistory());
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value")
        .innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=='-'){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString('en');
    return value;
}
function getOutput(num){
    return document.getElementById("output-value").innerText;
}
function reverseNumberFormat (num) {
    return Number(num.replace(/,/g,'')); // , to be replace by ''
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        // alert(this.id);
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        if(this.id=="backspace"){
           var 
           output=reverseNumberFormat(getOutput()).toString();
           if(output){
               output=output.substr(0,output.length-1);
               printOutput(output);
           }
        }   
        else{
            var output=getOutput();
            var history=getHistory();  
            if(output==''&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr("",history.length-1);
                }
            }          
            if(output!=""||history!=""){
                if(history=="Invalid Input"){
                    printHistory("");
                    history="";
                }
                output=output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else if(this.id=="+/-"){
                    var temp=parseFloat(output);
                    if(output>0){   
                        output="-"+output;
                    }
                    else if(output<0){
                        // console.log("int"+-1*temp);
                        output=output*-1;
                        //console.log(output);
                    }
//                     console.log(output);
                    printOutput("")
                    printOutput(output);
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
var funcs=document.getElementsByClassName("opSci");
for(var i=0;i<funcs.length;i++){
    funcs[i].addEventListener('click',function(){

        var output=reverseNumberFormat(getOutput());
        var history=getHistory();      
//         console.log(history);
        if(history=="Invalid Input"){
            history="";
            printHistory(history);
        }
        if(output=="" && this.id!="pi"&&this.id!="e"){
            printHistory("Invalid Input");
        }
        else if(this.id=="log10"){
//             console.log(output);
            if(output<0){
                printHistory("Invalid Input");
            }
            else{
                var res=Math.log10(output)
                printOutput("")
                history=history+res; 
                printHistory(history);
            }    
        }
        else if(this.id=="log2") {
//             console.log(output);
            if(output<0){
                printHistory("Invalid Input");
            }
            else{
                var res=Math.log2(output)
                printOutput("")
                history=history+res; 
                printHistory(history);    
            } 
        }
        else if(this.id=="ln") {
            if(output<0){
                printHistory("Invalid Input");
            }
            else{
//                 console.log(output);
                var res=Math.log(output)
                printOutput("")
                history=history+res; 
                printHistory(history);     

            }
            }
        else if(this.id=="abs") {
            if(output!=""){
//                 console.log(output);
                var res=Math.abs(output);
                printOutput("");
                output=res; 
                printOutput(output);
            }                 
        }
        else if(this.id=="sq") {
//             console.log(output);
            var res=Math.pow(output,2);
            printOutput("");
            output=res; 
            printOutput(output);     
        }
        else if(this.id=="pow") {
//             console.log(history);
            history=history+output+"**";
            
            // console.log(eval(history));
            printHistory(history);
            history=history+output;
            printOutput("");
        }
        else if(this.id=="sqrt") {
//             console.log(history);
            if(output<0){
                printHistory("Invalid Input");
            }
            else{    
                history=history+output+"**"+"0.5";
                // console.log(eval(history));
                printHistory(history);
                history=history+output;
                printOutput("");
            }
        }
        else if(this.id=="inv") {
//             console.log(history);
            history=history+output+"**"+"-1";
            // console.log(eval(history));
            printHistory(history);
            history=history+output;
            printOutput("");
        }
        else if(this.id=="floor") {
//             console.log(output);
            var res=Math.floor(output);
            printOutput("");
            output=res; 
            printOutput(output);     
        }
        else if(this.id=="ceil") {
//             console.log(output);
            var res=Math.ceil(output);
            printOutput("");
            output=res; 
            printOutput(output);     
        }
        else if(this.id=="sin") {
//             console.log(output);
            var res=Math.sin((output * Math.PI)/ 180);
            printOutput("");
            output=res; 
            printOutput(output);     
        }
        else if(this.id=="cos") {
//             console.log(output);
            var res=Math.cos((output * Math.PI)/ 180);
            printOutput("");
            output=res; 
            printOutput(output);     
        }
        else if(this.id=="tan") {
//             console.log(output);
            if(output!="90"){
                var res=Math.tan((output * Math.PI)/ 180);
                printOutput("");
                output=res; 
                printOutput(output);
            }    
        }
        else if(this.id=="sininv") {
//             console.log(output);
            var res=Math.asin(output);
            printOutput("");
            output=res; 
            printOutput(output);
        }
        else if(this.id=="cosinv") {
            console.log(output);
            var res=Math.acos(output);
            printOutput("");
            output=res; 
            printOutput(output);
        }
        else if(this.id=="taninv") {
//             console.log(output);
            var res=Math.atan(output);
            printOutput("");
            output=res; 
            printOutput(output);   
        }
        else if(this.id=="pi") {
//             console.log(output);            
            output=Math.PI;
            // printHistory(history);
            // console.log(eval(history));
            printOutput(output);  
        }
        else if(this.id=="e") {
//             console.log(output);            
            output=Math.E;
            // printHistory(history);
            // console.log(eval(history));
            printOutput(output);  
        }
        else if(this.id=="10x") {
//             console.log(history);
            history=history+"10"+"**"+output;
            // console.log(eval(history));
            printHistory(history);
            history=history+output;
            printOutput("");
        }
        
    });
}
function Display(){
    var x=document.getElementById('scipanal').style;
    if(x.display=="block"){
        x.display="none";
    }
    else{
        x.display="block";
    }
}

