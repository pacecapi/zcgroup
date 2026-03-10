/**
 * Send form data to email via API
 * @param {string} formType - Type of form (storstadning, flyttstadning, etc.)
 * @param {object} formData - Form data to send
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendEmail(formType, formData) {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formType, formData }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to send email');
        }

        return { success: true };
    } catch (error) {
        console.error('Email send error:', error);
        return { success: false, error: error.message };
    }
}
