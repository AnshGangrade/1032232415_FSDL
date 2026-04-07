// jquery-operations.js - jQuery Operations Demonstrations

$(document).ready(function() {
    console.log('jQuery loaded successfully!');
    
    // ============================================
    // 1. Change button text using jQuery
    // ============================================
    
    let jqueryBtnToggle = false;
    $('#jqueryBtn').click(function() {
        if (!jqueryBtnToggle) {
            // Change button text
            $(this).text('Button Text Changed with jQuery!');
            $(this).css({
                'background-color': '#28a745',
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
            jqueryBtnToggle = true;
        } else {
            $(this).text('Click Me (jQuery)');
            $(this).css({
                'background-color': '#0769ad',
                'transform': 'scale(1)'
            });
            jqueryBtnToggle = false;
        }
    });

    // ============================================
    // 2. Set background-image using jQuery CSS property
    // ============================================
    
    // Add a button to demonstrate background image
    const bgImageBtn = $('<button>')
        .addClass('btn btn-jquery')
        .text('Set Background Image')
        .css({
            'margin-top': '10px'
        });
    
    $('.jquery-section').append(bgImageBtn);
    
    let bgToggle = false;
    bgImageBtn.click(function() {
        if (!bgToggle) {
            // Set background image using jQuery CSS property
            $('#jqueryDemo').css({
                'background-image': 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%), url("https://via.placeholder.com/400x200/667eea/ffffff?text=jQuery+Background")',
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'min-height': '200px',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'transition': 'all 0.5s ease'
            });
            
            $('#jqueryDemo p').css({
                'background': 'rgba(255, 255, 255, 0.9)',
                'padding': '10px 20px',
                'border-radius': '5px',
                'font-weight': 'bold'
            });
            
            $(this).text('Remove Background Image');
            bgToggle = true;
        } else {
            // Remove background image
            $('#jqueryDemo').css({
                'background-image': 'none',
                'background-color': '#ffffff',
                'min-height': '100px'
            });
            
            $('#jqueryDemo p').css({
                'background': 'transparent',
                'padding': '0',
                'font-weight': 'normal'
            });
            
            $(this).text('Set Background Image');
            bgToggle = false;
        }
    });

    // ============================================
    // 3. Access HTML form data using jQuery
    // ============================================
    
    // Create a button to display form data
    const displayFormDataBtn = $('<button>')
        .addClass('btn btn-jquery')
        .text('Display Form Data (jQuery)')
        .css({
            'margin-top': '10px',
            'background-color': '#9c27b0'
        });
    
    $('.jquery-section').append(displayFormDataBtn);
    
    displayFormDataBtn.click(function() {
        // Access form data using jQuery
        const formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            password: $('#password').val() ? '********' : '', // Hide actual password
            confirmPassword: $('#confirmPassword').val() ? '********' : ''
        };
        
        // Create a display div for form data
        let formDataDisplay = $('#formDataDisplay');
        
        if (formDataDisplay.length === 0) {
            formDataDisplay = $('<div>')
                .attr('id', 'formDataDisplay')
                .css({
                    'margin-top': '15px',
                    'padding': '15px',
                    'background': '#f8f9fa',
                    'border-radius': '5px',
                    'border': '2px solid #9c27b0'
                });
            $('#jqueryDemo').append(formDataDisplay);
        }
        
        // Build HTML to display form data
        let html = '<h3 style="margin-top: 0; color: #9c27b0;">Form Data (accessed with jQuery):</h3>';
        html += '<ul style="list-style: none; padding: 0;">';
        
        for (let key in formData) {
            const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            const value = formData[key] || '<em style="color: #999;">Empty</em>';
            html += `<li style="padding: 5px 0; border-bottom: 1px solid #ddd;"><strong>${displayKey}:</strong> ${value}</li>`;
        }
        
        html += '</ul>';
        
        // Use jQuery to set HTML content
        formDataDisplay.html(html);
        
        // Add fade-in effect
        formDataDisplay.hide().fadeIn(500);
    });

    // ============================================
    // 4. Add attribute using jQuery
    // ============================================
    
    // Create a button to demonstrate adding attributes
    const addAttributeBtn = $('<button>')
        .addClass('btn btn-jquery')
        .text('Add Attributes (jQuery)')
        .css({
            'margin-top': '10px',
            'background-color': '#f44336'
        });
    
    $('.jquery-section').append(addAttributeBtn);
    
    addAttributeBtn.click(function() {
        // Add various attributes to form inputs using jQuery
        $('#username').attr({
            'data-validated': 'true',
            'data-type': 'text-input',
            'placeholder': 'Username updated via jQuery attr()',
            'maxlength': '30',
            'autocomplete': 'off'
        });
        
        $('#email').attr({
            'data-validated': 'true',
            'data-type': 'email-input',
            'placeholder': 'Email updated via jQuery attr()',
            'autocomplete': 'email'
        });
        
        $('#phone').attr({
            'data-validated': 'true',
            'data-type': 'phone-input',
            'placeholder': 'Phone updated via jQuery attr()'
        });
        
        // Add custom data attributes to buttons
        $('.btn-primary').attr('data-action', 'submit-form');
        $('.btn-secondary').attr('data-action', 'reset-form');
        
        // Add title attribute for tooltips
        $('#submitBtn').attr('title', 'Click to submit the registration form');
        $('#resetBtn').attr('title', 'Click to reset all form fields');
        
        // Create feedback message
        const feedbackMsg = $('<div>')
            .text('✓ Attributes added successfully! Check form inputs (inspect element to see data attributes).')
            .css({
                'margin-top': '10px',
                'padding': '10px',
                'background': '#d4edda',
                'color': '#155724',
                'border-radius': '5px',
                'border': '1px solid #c3e6cb'
            })
            .hide();
        
        $('#jqueryDemo').append(feedbackMsg);
        feedbackMsg.fadeIn(500);
        
        // Remove message after 3 seconds
        setTimeout(function() {
            feedbackMsg.fadeOut(500, function() {
                $(this).remove();
            });
        }, 3000);
        
        // Log attributes to console
        console.log('Username attributes:', $('#username')[0].attributes);
        console.log('Email attributes:', $('#email')[0].attributes);
    });

    // ============================================
    // Additional jQuery Demonstrations
    // ============================================
    
    // Demonstrate jQuery selectors and methods
    
    // 1. Hover effects using jQuery
    $('.btn').hover(
        function() {
            $(this).css('opacity', '0.8');
        },
        function() {
            $(this).css('opacity', '1');
        }
    );
    
    // 2. Chain multiple jQuery methods
    $('#jqueryDemo p').css('font-size', '16px')
                       .css('line-height', '1.6')
                       .addClass('fade-in');
    
    // 3. Toggle class on form groups
    $('.form-group label').click(function() {
        $(this).parent().toggleClass('highlighted');
    });
    
    // 4. Animate elements using jQuery
    const animateBtn = $('<button>')
        .addClass('btn btn-jquery')
        .text('Animate with jQuery')
        .css({
            'margin-top': '10px',
            'background-color': '#ff9800'
        });
    
    $('.jquery-section').append(animateBtn);
    
    animateBtn.click(function() {
        $('#jqueryDemo').animate({
            opacity: 0.3,
            marginLeft: '20px'
        }, 500).animate({
            opacity: 1,
            marginLeft: '0px'
        }, 500);
    });
    
    // 5. Get and set values using jQuery
    const formInputs = $('input.form-control');
    console.log('Total form inputs found with jQuery:', formInputs.length);
    
    // 6. Event handling with jQuery
    $('input.form-control').on('focus', function() {
        $(this).css('border-color', '#667eea');
    }).on('blur', function() {
        if (!$(this).hasClass('error-input') && !$(this).hasClass('success-input')) {
            $(this).css('border-color', '#ddd');
        }
    });
    
    // 7. DOM traversal with jQuery
    $('.form-group').each(function(index) {
        $(this).attr('data-group-index', index + 1);
    });
    
    // 8. Create a summary section showing jQuery capabilities
    const jquerySummary = $('<div>')
        .css({
            'margin-top': '20px',
            'padding': '15px',
            'background': '#fff3cd',
            'border-radius': '5px',
            'border-left': '4px solid #ff9800'
        })
        .html(`
            <h4 style="margin-top: 0; color: #856404;">jQuery Features Demonstrated:</h4>
            <ul style="margin-bottom: 0;">
                <li>✓ Change button text using .text()</li>
                <li>✓ Set background-image using .css()</li>
                <li>✓ Access form data using .val()</li>
                <li>✓ Add attributes using .attr()</li>
                <li>✓ DOM manipulation with jQuery selectors</li>
                <li>✓ Event handling with .click(), .hover(), .on()</li>
                <li>✓ Animations with .animate(), .fadeIn(), .fadeOut()</li>
                <li>✓ Method chaining</li>
            </ul>
        `);
    
    $('.jquery-section').append(jquerySummary);
    
    // Log jQuery version
    console.log('jQuery version:', $.fn.jquery);
    console.log('All jQuery operations initialized successfully!');
});
