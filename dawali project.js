// 1. डिस्प्ले स्क्रीन (इनपुट बॉक्स) को सेलेक्ट करना
const display = document.getElementById('num');

// 2. स्क्रीन पर नंबर या ऑपरेटर जोड़ने के लिए फंक्शन
function appendValue(val) {
    // अगर स्क्रीन पर पहले से 'Error' लिखा है, तो उसे साफ़ कर दें
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += val;
}

// 3. स्क्रीन को पूरी तरह साफ़ (Clear) करने के लिए फंक्शन (AC बटन)
function clearDisplay() {
    display.value = '';
}

// 4. अंतिम परिणाम (Result) निकालने के लिए फंक्शन (= बटन)
function calculate() {
    try {
        // eval() फंक्शन स्ट्रिंग (जैसे '5+3*2') को गणितीय रूप से हल करता है
        // यदि इनपुट खाली है, तो कुछ न करें
        if (display.value.trim() !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        // अगर यूजर गलत इनपुट डालता है (जैसे '5++2'), तो Error दिखाएं
        display.value = 'Error';
    }
}
