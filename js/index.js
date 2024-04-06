

async function getContacts() {
    try 
    {
        const response = await fetch('https://66114bf095fdb62f24ece2a6.mockapi.io/api/config/contacts');
        if (!response.ok) 
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contacts = await response.json();
        console.log(contacts);
        renderContacts(contacts);
    } 
    catch (e) 
    {
        console.error('Fetch failed:', e);
    }
}

getContacts();

function renderContacts(contactsData) 
{
    const contactsContainer = document.getElementById('contacts');
    contactsContainer.innerHTML = ''; 

    contactsData.forEach(contact => 
    {
        const contactElement = document.createElement('div');
        contactElement.className = 'list-group-item';
        contactElement.innerHTML = `
            <strong>${contact.name}</strong><br>${contact.email}
        `;
        contactsContainer.appendChild(contactElement);
    });
}
