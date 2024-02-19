function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const birthDate = new Date(year, month - 1, day); // Subtract 1 from month to account for zero-based indexing
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12; // Add 12 months to handle negative month difference
    }

    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        days += lastMonth.getDate();
        months--; // Adjust the month difference
    }

    document.getElementById('resYears').textContent = years;
    document.getElementById('resMonths').textContent = months;
    document.getElementById('resDays').textContent = days;
}