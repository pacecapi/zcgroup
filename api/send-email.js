import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { formType, formData } = req.body;

        // Validate required fields
        if (!formType || !formData) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Build email content based on form type
        const emailContent = buildEmailContent(formType, formData);

        const { data, error } = await resend.emails.send({
            from: 'Z&C Group <boking@zcgroup.se>',
            to: ['boking@zcgroup.se'],
            subject: emailContent.subject,
            html: emailContent.html,
            replyTo: formData.email || undefined,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true, messageId: data.id });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

function buildEmailContent(formType, data) {
    const templates = {
        // Storstädning
        storstadning: {
            subject: `Ny bokning: Storstädning - ${data.firstName} ${data.lastName}`,
            html: `
                <h2>Ny bokningsförfrågan: Storstädning</h2>
                <h3>Kundinformation</h3>
                <ul>
                    <li><strong>Namn:</strong> ${data.firstName} ${data.lastName}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                    <li><strong>Adress:</strong> ${data.address}, ${data.postalCode} ${data.city}</li>
                </ul>
                <h3>Bokningsdetaljer</h3>
                <ul>
                    <li><strong>Bostadstyp:</strong> ${data.propertyType || 'Ej angivet'}</li>
                    <li><strong>Storlek:</strong> ${data.size} m²</li>
                    <li><strong>Önskat datum:</strong> ${data.preferredDate}</li>
                </ul>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Flyttstädning
        flyttstadning: {
            subject: `Ny bokning: Flyttstädning - ${data.firstName} ${data.lastName}`,
            html: `
                <h2>Ny bokningsförfrågan: Flyttstädning</h2>
                <h3>Kundinformation</h3>
                <ul>
                    <li><strong>Namn:</strong> ${data.firstName} ${data.lastName}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                    <li><strong>Adress:</strong> ${data.address}, ${data.postalCode} ${data.city}</li>
                </ul>
                <h3>Bokningsdetaljer</h3>
                <ul>
                    <li><strong>Bostadstyp:</strong> ${data.propertyType || 'Ej angivet'}</li>
                    <li><strong>Storlek:</strong> ${data.size} m²</li>
                    <li><strong>Önskat datum:</strong> ${data.preferredDate}</li>
                </ul>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Fönsterputs
        fonsterputs: {
            subject: `Ny bokning: Fönsterputs - ${data.firstName} ${data.lastName}`,
            html: `
                <h2>Ny bokningsförfrågan: Fönsterputs</h2>
                <h3>Kundinformation</h3>
                <ul>
                    <li><strong>Namn:</strong> ${data.firstName} ${data.lastName}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                    <li><strong>Adress:</strong> ${data.address}, ${data.postalCode} ${data.city}</li>
                    <li><strong>Våning:</strong> ${data.floor || 'Ej angivet'}</li>
                </ul>
                <h3>Fönsterval</h3>
                <pre>${JSON.stringify(data.selectedWindows, null, 2)}</pre>
                <h3>Tilläggstjänster</h3>
                <pre>${JSON.stringify(data.selectedAddons, null, 2)}</pre>
                <h3>Beräknat pris</h3>
                <p><strong>${data.totalPrice} kr</strong> (efter RUT-avdrag)</p>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Visningsstädning (Private)
        visningsstadning: {
            subject: `Ny bokning: Visningsstädning - ${data.firstName} ${data.lastName}`,
            html: `
                <h2>Ny bokningsförfrågan: Visningsstädning</h2>
                <h3>Kundinformation</h3>
                <ul>
                    <li><strong>Namn:</strong> ${data.firstName} ${data.lastName}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                    <li><strong>Adress:</strong> ${data.address}, ${data.postalCode} ${data.city}</li>
                </ul>
                <h3>Bokningsdetaljer</h3>
                <ul>
                    <li><strong>Bostadstyp:</strong> ${data.propertyType || 'Ej angivet'}</li>
                    <li><strong>Storlek:</strong> ${data.size || 'Ej angivet'}</li>
                    <li><strong>Önskat datum:</strong> ${data.preferredDate}</li>
                    <li><strong>Tid:</strong> ${data.timeSlot || 'Ej angivet'}</li>
                </ul>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Kontorsstädning (Business)
        kontorsstadning: {
            subject: `Ny offertförfrågan: Kontorsstädning - ${data.companyName}`,
            html: `
                <h2>Ny offertförfrågan: Kontorsstädning</h2>
                <h3>Företagsinformation</h3>
                <ul>
                    <li><strong>Företag:</strong> ${data.companyName}</li>
                    <li><strong>Org.nr:</strong> ${data.orgNumber}</li>
                    <li><strong>Kontaktperson:</strong> ${data.contactPerson}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                    <li><strong>Adress:</strong> ${data.address}, ${data.postalCode} ${data.city}</li>
                </ul>
                <h3>Städbehov</h3>
                <ul>
                    <li><strong>Kontorsstorlek:</strong> ${data.officeSize || 'Ej angivet'} m²</li>
                    <li><strong>Antal anställda:</strong> ${data.employees || 'Ej angivet'}</li>
                    <li><strong>Frekvens:</strong> ${data.frequency || 'Ej angivet'}</li>
                    <li><strong>Önskad städtid:</strong> ${data.preferredTime || 'Ej angivet'}</li>
                </ul>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Byggstädning (Business)
        byggstadning: {
            subject: `Ny offertförfrågan: Byggstädning - ${data.companyName}`,
            html: `
                <h2>Ny offertförfrågan: Byggstädning</h2>
                <h3>Företagsinformation</h3>
                <ul>
                    <li><strong>Företag:</strong> ${data.companyName}</li>
                    <li><strong>Org.nr:</strong> ${data.orgNumber}</li>
                    <li><strong>Kontaktperson:</strong> ${data.contactPerson}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                </ul>
                <h3>Projektinformation</h3>
                <ul>
                    <li><strong>Projektadress:</strong> ${data.projectAddress}, ${data.postalCode} ${data.city}</li>
                    <li><strong>Projekttyp:</strong> ${data.projectType || 'Ej angivet'}</li>
                    <li><strong>Projektstorlek:</strong> ${data.projectSize || 'Ej angivet'} m²</li>
                    <li><strong>Typ av städning:</strong> ${data.cleaningType || 'Ej angivet'}</li>
                    <li><strong>Önskat startdatum:</strong> ${data.startDate || 'Ej angivet'}</li>
                </ul>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Trappstädning (Business)
        trappstadning: {
            subject: `Ny offertförfrågan: Trappstädning - ${data.companyName}`,
            html: `
                <h2>Ny offertförfrågan: Trappstädning</h2>
                <h3>Företags-/Föreningsinformation</h3>
                <ul>
                    <li><strong>Företag/BRF:</strong> ${data.companyName}</li>
                    <li><strong>Org.nr:</strong> ${data.orgNumber}</li>
                    <li><strong>Kontaktperson:</strong> ${data.contactPerson}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                </ul>
                <h3>Fastighetsinformation</h3>
                <ul>
                    <li><strong>Adress:</strong> ${data.propertyAddress}, ${data.postalCode} ${data.city}</li>
                    <li><strong>Antal våningar:</strong> ${data.floors || 'Ej angivet'}</li>
                    <li><strong>Antal lägenheter:</strong> ${data.apartments || 'Ej angivet'}</li>
                    <li><strong>Önskad frekvens:</strong> ${data.frequency || 'Ej angivet'}</li>
                </ul>
                ${data.additionalServices?.length ? `
                <h3>Tilläggstjänster</h3>
                <ul>${data.additionalServices.map(s => `<li>${s}</li>`).join('')}</ul>
                ` : ''}
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        },

        // Solcellsmontage (B2B)
        solcellsmontage: {
            subject: `Ny förfrågan: Solcellsmontage - ${data.companyName}`,
            html: `
                <h2>Ny förfrågan: Solcellsmontage (B2B)</h2>
                <h3>Företagsinformation</h3>
                <ul>
                    <li><strong>Företag:</strong> ${data.companyName}</li>
                    <li><strong>Org.nr:</strong> ${data.orgNumber || 'Ej angivet'}</li>
                    <li><strong>Kontaktperson:</strong> ${data.contactPerson}</li>
                    <li><strong>E-post:</strong> ${data.email}</li>
                    <li><strong>Telefon:</strong> ${data.phone}</li>
                </ul>
                ${data.message ? `<h3>Meddelande</h3><p>${data.message}</p>` : ''}
            `
        }
    };

    return templates[formType] || {
        subject: `Ny förfrågan från zcgroup.se`,
        html: `<pre>${JSON.stringify(data, null, 2)}</pre>`
    };
}
