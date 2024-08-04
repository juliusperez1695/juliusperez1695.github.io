
window.addEventListener('DOMContentLoaded', selectionHandler);

function selectionHandler() {
    let selection = document.getElementById('projectList');
    selection.addEventListener('change', changeContent(selection));
}

function changeContent(choice){
    console.log("Entered changeContent()");
    console.log(choice.value);
    let displayText = ""
    switch(choice.value){
        case 'project1':
            displayText = 'This terminal software application loads a dataset containing outliers, ' + 
                'then removes those erroneous values by comparing the data against a model function.' + 
                'An initial fit is created for the imported dataset, and the difference between the' +
                'result and each data point is compared to a threshold which defines an outlier.  Points' +
                'which exceed the threshold are then removed from the dataset, and key points like local' +
                'extrema are recalculated to correct the error before the data was cleaned.'; 
            imgSrc = "./project1.png";
            break;
        case 'project2':
            displayText = 'Worked with Dr. Judson Ryckman on the fabrication of a flat-surface device ' +
                'containing a patterned distribution of refractive index. This was done by the direct imprinting ' +
                'of porous silicon followed by the polishing-off of the imprinted surface topology. This internship '+
                'culminated in a seminar presenting the results of my research to STEM faculty of Clemson University '+
                'as well as various publications and citations in scientific articles.';
            imgSrc = "./project2.png";
            break;
        case 'project3':
            displayText = 'Through the 10 week quarter, our team designed a crane system with the ability to retrieve ' +
                'its own parts and build upon itself. My focus was software development using LabView and the MyRIO system ' +
                'to implement various modules such as DC motors and optical limit switches to create a working electro-' +
                'mechanical system with partial automation.';
            imgSrc = "./project3.png";
            break;
        default:
            break;
    }
    document.getElementById('projDescript').innerText = displayText;
    document.getElementById('photoInput').src = imgSrc; //change attribute from .innerText to .src
}