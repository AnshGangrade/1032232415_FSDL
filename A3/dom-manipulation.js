// dom-manipulation.js - DOM Manipulation Demonstrations

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. getElementById - Access elements by ID
    // ============================================
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const addNodeBtn = document.getElementById('addNodeBtn');
    const deleteNodeBtn = document.getElementById('deleteNodeBtn');
    const changePositionBtn = document.getElementById('changePositionBtn');
    const changeLogo = document.getElementById('changeLogo');
    const dynamicContent = document.getElementById('dynamicContent');
    const mainHeading = document.getElementById('mainHeading');
    const logo = document.getElementById('logo');

    // ============================================
    // 2. getElementsByTagName - Access by tag name
    // ============================================
    
    // Change text using innerHTML property
    changeTextBtn.addEventListener('click', function() {
        const paragraphs = dynamicContent.getElementsByTagName('p');
        
        if (paragraphs.length > 0) {
            // Change innerHTML of first paragraph
            paragraphs[0].innerHTML = '<strong>Text changed using innerHTML!</strong> This demonstrates DOM manipulation.';
            
            // Change innerHTML of second paragraph if exists
            if (paragraphs.length > 1) {
                paragraphs[1].innerHTML = '<em>This paragraph was also modified using getElementsByTagName!</em>';
            }
            
            // Animate the changes
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].classList.add('fade-in');
            }
        }
    });

    // ============================================
    // 3. getElementsByClassName - Access by class name
    // ============================================
    
    // Change CSS properties (color) of elements
    let colorToggle = false;
    changeColorBtn.addEventListener('click', function() {
        const demoTexts = document.getElementsByClassName('demo-text');
        
        if (!colorToggle) {
            // Change color and other CSS properties
            for (let i = 0; i < demoTexts.length; i++) {
                demoTexts[i].style.color = '#e74c3c';
                demoTexts[i].style.fontWeight = 'bold';
                demoTexts[i].style.backgroundColor = '#fff3cd';
                demoTexts[i].style.padding = '15px';
                demoTexts[i].style.borderRadius = '5px';
                demoTexts[i].style.transform = 'scale(1.05)';
                demoTexts[i].style.transition = 'all 0.3s ease';
            }
            changeColorBtn.textContent = 'Reset Color';
            colorToggle = true;
        } else {
            // Reset CSS properties
            for (let i = 0; i < demoTexts.length; i++) {
                demoTexts[i].style.color = '';
                demoTexts[i].style.fontWeight = '';
                demoTexts[i].style.backgroundColor = '';
                demoTexts[i].style.padding = '10px';
                demoTexts[i].style.transform = 'scale(1)';
            }
            changeColorBtn.textContent = 'Change Color';
            colorToggle = false;
        }
    });

    // ============================================
    // 4. Change position of element
    // ============================================
    
    let positionToggle = false;
    changePositionBtn.addEventListener('click', function() {
        const demoTexts = document.getElementsByClassName('demo-text');
        
        if (!positionToggle) {
            for (let i = 0; i < demoTexts.length; i++) {
                demoTexts[i].style.position = 'relative';
                demoTexts[i].style.left = '30px';
                demoTexts[i].style.transition = 'left 0.5s ease';
            }
            changePositionBtn.textContent = 'Reset Position';
            positionToggle = true;
        } else {
            for (let i = 0; i < demoTexts.length; i++) {
                demoTexts[i].style.left = '0px';
            }
            changePositionBtn.textContent = 'Move Element';
            positionToggle = false;
        }
    });

    // ============================================
    // 5. Change image source on button click
    // ============================================
    
    let logoToggle = false;
    const logoImages = [
        'https://via.placeholder.com/100x100/4CAF50/ffffff?text=SCET',
        'https://via.placeholder.com/100x100/FF5722/ffffff?text=COLLEGE',
        'https://via.placeholder.com/100x100/2196F3/ffffff?text=TECH'
    ];
    let currentLogoIndex = 0;

    changeLogo.addEventListener('click', function() {
        currentLogoIndex = (currentLogoIndex + 1) % logoImages.length;
        logo.src = logoImages[currentLogoIndex];
        
        // Add animation effect
        logo.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            logo.style.transform = 'rotate(0deg) scale(1)';
        }, 500);
    });

    // ============================================
    // 6. Add a text node and attach to parent
    // ============================================
    
    let nodeCounter = 0;
    addNodeBtn.addEventListener('click', function() {
        nodeCounter++;
        
        // Create a new paragraph element
        const newParagraph = document.createElement('p');
        
        // Create a text node
        const textNode = document.createTextNode(`New paragraph #${nodeCounter} added dynamically using createTextNode and appendChild!`);
        
        // Append text node to paragraph
        newParagraph.appendChild(textNode);
        
        // Add class for styling
        newParagraph.className = 'demo-text';
        newParagraph.style.backgroundColor = '#d4edda';
        newParagraph.style.borderLeftColor = '#28a745';
        newParagraph.classList.add('fade-in');
        
        // Append paragraph to parent node (dynamicContent div)
        dynamicContent.appendChild(newParagraph);
        
        // Also demonstrate adding more complex content
        const infoSpan = document.createElement('span');
        infoSpan.style.fontSize = '12px';
        infoSpan.style.color = '#666';
        infoSpan.style.marginLeft = '10px';
        const timeText = document.createTextNode(` (Created at: ${new Date().toLocaleTimeString()})`);
        infoSpan.appendChild(timeText);
        newParagraph.appendChild(infoSpan);
    });

    // ============================================
    // 7. Delete a node
    // ============================================
    
    deleteNodeBtn.addEventListener('click', function() {
        const paragraphs = dynamicContent.getElementsByTagName('p');
        
        if (paragraphs.length > 0) {
            // Get the last paragraph
            const lastParagraph = paragraphs[paragraphs.length - 1];
            
            // Add fade out effect before removing
            lastParagraph.style.opacity = '0';
            lastParagraph.style.transition = 'opacity 0.3s ease';
            
            // Remove the node after animation
            setTimeout(() => {
                dynamicContent.removeChild(lastParagraph);
            }, 300);
        } else {
            alert('No paragraphs to delete! Add some nodes first.');
        }
    });

    // ============================================
    // Additional DOM Manipulation Examples
    // ============================================
    
    // Change heading text on double-click
    mainHeading.addEventListener('dblclick', function() {
        if (this.innerHTML === 'Student Registration Form') {
            this.innerHTML = '<span style="color: #667eea;">Welcome to SCET Registration!</span>';
        } else {
            this.innerHTML = 'Student Registration Form';
        }
    });

    // Demonstrate accessing all form controls
    const form = document.getElementById('registrationForm');
    form.addEventListener('focus', function(e) {
        if (e.target.classList.contains('form-control')) {
            e.target.style.boxShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
        }
    }, true);

    form.addEventListener('blur', function(e) {
        if (e.target.classList.contains('form-control')) {
            e.target.style.boxShadow = '';
        }
    }, true);

    // Demonstrate getElementsByName
    const inputs = document.getElementsByTagName('input');
    console.log('Total input fields:', inputs.length);

    // Log all DOM operations to console for demonstration
    console.log('DOM Manipulation script loaded successfully!');
    console.log('Available DOM methods demonstrated:');
    console.log('- getElementById');
    console.log('- getElementsByTagName');
    console.log('- getElementsByClassName');
    console.log('- innerHTML property');
    console.log('- CSS style manipulation');
    console.log('- createElement and createTextNode');
    console.log('- appendChild and removeChild');
});
