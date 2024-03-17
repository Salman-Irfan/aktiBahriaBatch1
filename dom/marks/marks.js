console.log(`events`)

const calculateTotalMarks = (studentMarks, totalMarks) => {
    const { math, phy, che } = studentMarks;

    // Convert the marks to numbers for calculations
    const mathMarks = parseInt(math);
    const phyMarks = parseInt(phy);
    const cheMarks = parseInt(che);

    // Calculate the total marks
    const totalObtainedMarks = mathMarks + phyMarks + cheMarks;

    // Calculate the percentage
    const percentage = (totalObtainedMarks / totalMarks) * 100;
    const average = totalObtainedMarks / 3
    return { totalObtainedMarks, percentage, average };
}

const marksForm = document.getElementById("marksForm")
const studentStatus = document.getElementById('studentStatus')

marksForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const math = document.getElementById('math').value;
    const phy = document.getElementById('phy').value;
    const che = document.getElementById('che').value;

    const marksFormData = {
        math,
        phy,
        che
    };

    const totalMarks = 300;
    const result = calculateTotalMarks(marksFormData, totalMarks);

    // Update student status dynamically
    studentStatus.innerHTML = `
        Total Marks Obtained: ${result.totalObtainedMarks}<br>
        Percentage: ${result.percentage}% <br>
        Average: ${result.average}% <br>
    `;
});
