// 'use strict'
// document.getElementById('myForm').addEventListener('click', function (event){
//     event.preventDefault();
//
//     let name = document.getElementById('name').value;
//     let gender = document.getElementById('gender').value;
//     let theme = document.getElementById('theme').value;
//
//     let salutation = '';
//     var genLetter = '';
//
//     switch (gender) {
//         case 'male':
//             salutation = 'Mr.';
//             break;
//         case 'female':
//             salutation = 'Ms.';
//             break;
//         default:
//             salutation = 'Mx.';
//             break;
//     }
//
//     switch (theme) {
//         case 'romantic':
//             if (gender == 'male'){
//                 genLetter= [
//                     "Dear " + salutation + " " + name + ",",
//                     "Every day with you is a wonderful addition to my life's journey.",
//                     "You are my sun, my moon, and all my stars.",
//                     "With all my love,",
//                     "Your Secret Admirer"
//                 ];
//             }else if (gender == 'female'){
//                 genLetter=[
//                     "Dear " + salutation + " " + name + ",",
//                     "Every day with you is a wonderful addition to my life's journey.",
//                     "You are my sun, my moon, and all my stars.",
//                     "With all my love,",
//                     "Your Secret Admirer"
//                 ];
//
//             }
//             else {
//                 genLetter= [
//                     "Dear " + salutation + " " + name + ",",
//                     "Every day with you is a wonderful addition to my life's journey.",
//                     "You are my sun, my moon, and all my stars.",
//                     "With all my love,",
//                     "Your Secret Admirer"
//                 ];
//             };
//             break;
//             case 'friendly':
//                 if (gender == 'male'){
//                     genLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "I am so grateful for your friendship.",
//                         "You bring so much joy into my life.",
//                         "With all my love,",
//                         "Your Friend"
//                     ];
//                 }else if (gender == 'female'){
//                     genLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "I am so grateful for your friendship.",
//                         "You bring so much joy into my life.",
//                         "With all my love,",
//                         "Your Friend"
//                     ];
//                 }else {
//                     genLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "I am so grateful for your friendship.",
//                         "You bring so much joy into my life.",
//                         "With all my love,",
//                         "Your Friend"
//                     ];
//                 }
//           break;
//         case 'appreciation':
//             if (gender == 'male') {
//                 genLetter = [
//                     "Dear " + salutation + " " + name + ",",
//                     "I just wanted to let you know how much I appreciate having you in my life.",
//                     "You bring so much happiness and joy into my world.",
//                     "With all my love,",
//                     "Your Secret Admirer"
//                 ];
//             }
//             else if(gender == 'female'){
//                 genLetter = [
//                     "Dear " + salutation + " " + name + ",",
//                     "I just wanted to let you know how much I appreciate having you in my life.",
//                     "You bring so much happiness and joy into my world.",
//                     "With all my love,",
//                     "Your Secret Admirer"
//                 ];
//             }else {
//                 genLetter = [
//                     "Dear " + salutation + " " + name + ",",
//                     "I just wanted to let you know how much I appreciate having you in my life.",
//                     "You bring so much happiness and joy into my world.",
//                     "With all my love,",
//                     "Your Secret Admirer"
//                 ];
//             }
//             break;
//         default:
//             genLetter = [
//                 "Dear " + salutation + " " + f_name + ",",
//                 "I hope this letter finds you in the best of health and spirits.",
//                 "I look forward to creating many more beautiful memories with you.",
//                 "Your Secret Admirer"
//             ];
//             break;
//     }
//
//
//     var jsonLoveLetter = JSON.stringify(loveLetter);
//
//     // Display the JSON data under the form
//     var displayElement = document.createElement('pre');
//     displayElement.textContent = jsonLoveLetter;
//     document.body.appendChild(displayElement);
// })
// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Retrieve name from the form
//     var name = document.getElementById('name').value;
//     var gender = document.getElementById('gender').value;
//     var theme = document.getElementById('theme').value;

//     // Store form data in local storage
//     var formData = {name: name, gender: gender, theme: theme};
//     localStorage.setItem('formData', JSON.stringify(formData));

//     var salutation = '';
//     var loveLetter = '';
//     switch (gender) {
//         case 'male':
//             salutation = 'Mr.';
//             break;
//         case 'female':
//             salutation = 'Ms.';
//             break;
//         default:
//             salutation = 'Mx.';
//             break;
//     }
//     switch (theme) {
//         case 'romantic':
//             loveLetter = [
//                 "Dear " + salutation + " " + name + ",",
//                 "Every day with you is a wonderful addition to my life's journey.",
//                 "You are my sun, my moon, and all my stars.",
//                 "With all my love,",
//                 "Your Secret Admirer"
//             ];
//             break;
//         case 'friendly':
//             loveLetter = [
//                 "Dear " + salutation + " " + name + ",",
//                 "I am so grateful for your friendship.",
//                 "You bring so much joy into my life.",
//                 "With all my love,",
//                 "Your Friend"
//             ];
//             break;
//         case 'appreciation':
//             loveLetter = [
//                 "Dear " + salutation + " " + name + ",",
//                 "I just wanted to let you know how much I appreciate having you in my life.",
//                 "You bring so much happiness and joy into my world.",
//                 "With all my love,",
//                 "Your Secret Admirer"
//             ];
//             break;
//         default:
//             loveLetter = [
//                 "Dear " + salutation + " " + name + ",",
//                 "I hope this letter finds you in the best of health and spirits.",
//                 "I look forward to creating many more beautiful memories with you.",
//                 "Your Secret Admirer"
//             ];
//             break;
//     }

//     // Store the generated letter in a variable
//     loveLetter = loveLetter.join('\n');

//     // Wait for 2 seconds before revealing the letter
//     setTimeout(function() {
//         // Display the letter in the text_view div
//         var loveLetterDiv = document.querySelector('.text_view');
//         loveLetterDiv.textContent = loveLetter;
//         loveLetterDiv.style.display = 'block';
//     }, 2000);
// });

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Form validation
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
     if (!name || !lastName) {
        alert('Please enter your first and last name');
        return;
    }
    // Retrieve gender and theme from the form
    var gender = document.getElementById('gender').value;
    var theme = document.getElementById('theme').value;

    // Store form data in local storage
    var formData = {name: name, gender: gender, theme: theme};
    localStorage.setItem('formData', JSON.stringify(formData));

    var salutation = '';
    var loveLetter = '';
    switch (gender) {
        case 'male':
            salutation = 'Mr.';
            break;
        case 'female':
            salutation = 'Ms.';
            break;
        default:
            salutation = 'Mx.';
            break;
    }
    switch (theme) {
        case 'romantic':
            switch (gender) {
                case 'male':
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "Every day with you is a wonderful addition to my life's journey.",
                        "You are my sun, my moon, and all my stars.",
                        "With all my love,",
                        "Your Secret Admirer"
                    ];
                    break;
                case 'female':
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "Your presence in my life feels like a dream come true.",
                        "You are the queen of my heart, my first and only love.",
                        "With all my love,",
                        "Your Secret Admirer"
                    ];
                    break;
                default:
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "Your love shines brighter than the stars in my universe.",
                        "You are the one who makes my world complete.",
                        "With all my love,",
                        "Your Secret Admirer"
                    ];
                    break;
            }
            break;
        case 'friendly':
            switch (gender) {
                case 'male':
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "Your friendship means the world to me.",
                        "You're like a brother to me.",
                        "With all my respect,",
                        "Your Friend"
                    ];
                    break;
                case 'female':
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "Your friendship brightens my day.",
                        "You're like a sister to me.",
                        "With all my respect,",
                        "Your Friend"
                    ];
                    break;
                default:
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "Your friendship is a special gift.",
                        "I'm grateful for all the fun and joy you bring into my life.",
                        "With all my respect,",
                        "Your Friend"
                    ];
                    break;
            }
            break;
        case 'appreciation':
            switch (gender) {
                case 'male':
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "I appreciate your strength and courage.",
                        "You inspire me with your wisdom and kindness.",
                        "With all my respect,",
                        "Your Admirer"
                    ];
                    break;
                case 'female':
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "I appreciate your compassion and grace.",
                        "You inspire me with your wisdom and kindness.",
                        "With all my respect,",
                        "Your Admirer"
                    ];
                    break;
                default:
                    loveLetter = [
                        "Dear " + salutation + " " + name + "" + lastName + ",",
                        "I appreciate your unique perspective and insights.",
                        "You inspire me with your wisdom and kindness.",
                        "With all my respect,",
                        "Your Admirer"
                    ];
                    break;
            }
            break;
        default:
            loveLetter = [
                "Dear " + salutation + " " + name + "" + lastName + ",",
                "I hope this letter finds you in the best of health and spirits.",
                "I look forward to creating many more beautiful memories with you.",
                "Your Secret Admirer"
            ];
            break;
    }

    // Store the generated letter in a variable
    loveLetter = loveLetter.join('\n');

    // Display the letter in the text_view div
    var loveLetterDiv = document.querySelector('.text_view');
    loveLetterDiv.textContent = loveLetter;
    loveLetterDiv.style.display = 'block';
});



// document.getElementById('myForm').addEventListener('submit', function(event) {
//     // Form validation
//     let name = document.getElementById('name').value;
//     if (!name) {
//         alert('Please enter your name');
//         event.preventDefault(); // Prevent the form from submitting
//         return;
//     }

//     // Retrieve gender and theme from the form
//     var gender = document.getElementById('gender').value;
//     var theme = document.getElementById('theme').value;

//     // Store form data in local storage
//     var formData = {name: name, gender: gender, theme: theme};
//     localStorage.setItem('formData', JSON.stringify(formData));

//     var salutation = '';
//     var loveLetter = '';
//     switch (gender) {
//         case 'male':
//             salutation = 'Mr.';
//             break;
//         case 'female':
//             salutation = 'Ms.';
//             break;
//         default:
//             salutation = 'Mx.';
//             break;
//     }
//     switch (theme) {
//         case 'romantic':
//             switch (gender) {
//                 case 'male':
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "Every day with you is a wonderful addition to my life's journey.",
//                         "You are my sun, my moon, and all my stars.",
//                         "With all my love,",
//                         "Your Secret Admirer"
//                     ];
//                     break;
//                 case 'female':
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "Your presence in my life feels like a dream come true.",
//                         "You are the queen of my heart, my first and only love.",
//                         "With all my love,",
//                         "Your Secret Admirer"
//                     ];
//                     break;
//                 default:
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "Your love shines brighter than the stars in my universe.",
//                         "You are the one who makes my world complete.",
//                         "With all my love,",
//                         "Your Secret Admirer"
//                     ];
//                     break;
//             }
//             break;
//         case 'friendly':
//             switch (gender) {
//                 case 'male':
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "Your friendship means the world to me.",
//                         "You're like a brother to me.",
//                         "With all my respect,",
//                         "Your Friend"
//                     ];
//                     break;
//                 case 'female':
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "Your friendship brightens my day.",
//                         "You're like a sister to me.",
//                         "With all my respect,",
//                         "Your Friend"
//                     ];
//                     break;
//                 default:
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "Your friendship is a special gift.",
//                         "I'm grateful for all the fun and joy you bring into my life.",
//                         "With all my respect,",
//                         "Your Friend"
//                     ];
//                     break;
//             }
//             break;
//         case 'appreciation':
//             switch (gender) {
//                 case 'male':
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "I appreciate your strength and courage.",
//                         "You inspire me with your wisdom and kindness.",
//                         "With all my respect,",
//                         "Your Admirer"
//                     ];
//                     break;
//                 case 'female':
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "I appreciate your compassion and grace.",
//                         "You inspire me with your wisdom and kindness.",
//                         "With all my respect,",
//                         "Your Admirer"
//                     ];
//                     break;
//                 default:
//                     loveLetter = [
//                         "Dear " + salutation + " " + name + ",",
//                         "I appreciate your unique perspective and insights.",
//                         "You inspire me with your wisdom and kindness.",
//                         "With all my respect,",
//                         "Your Admirer"
//                     ];
//                     break;
//             }
//             break;
//         default:
//             loveLetter = [
//                 "Dear " + salutation + " " + name + ",",
//                 "I hope this letter finds you in the best of health and spirits.",
//                 "I look forward to creating many more beautiful memories with you.",
//                 "Your Secret Admirer"
//             ];
//             break;
//     }

//     // Store the generated letter in a variable
//     loveLetter = loveLetter.join('\n');

//     // Display the letter in the text_view div
//     var loveLetterDiv = document.querySelector('.text_view');
//     loveLetterDiv.textContent = loveLetter;
//     loveLetterDiv.style.display = 'block';

//     // Refresh the letter every 2 minutes
//     setInterval(function() {
//         loveLetterDiv.textContent = loveLetter;
//     }, 2 * 60 * 1000);
// });
