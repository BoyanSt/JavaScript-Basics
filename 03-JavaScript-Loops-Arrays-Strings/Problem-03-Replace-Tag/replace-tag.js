

function replaceTag(){
    var inputString = '<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>';
    var output = inputString.replace(/<a/g,'[URL')
                            .replace(/<\/a>/, '[/URL]')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;');
    document.getElementById("output-data").innerHTML = output;
}


