function showPrecaution(disease) {
    const precautions = {
      Hyperaldosteronism:
        "Reduce sodium intake, take prescribed medications, and monitor blood pressure regularly.",
      Gordon_Syndrome:
        "Maintain a healthy diet, exercise regularly, and consult a genetic counselor.",
      Liddle_Syndrome:
        "Follow a low-sodium diet, take prescribed medications, and monitor potassium levels.",
      Hypertension_and_Brachydactyly_Syndrome:
        "Regular exercise, maintain a healthy diet, and monitor blood pressure.",
      Monogenic_diabetes:
        "Monitor blood sugar levels, follow a healthy diet, and take insulin or other medications as prescribed.",
      Cystic_fibrosis:
        "Follow a high-calorie diet, take enzyme supplements, and perform chest physiotherapy.",
      Hemochromatosis:
        "Regular blood donations, avoid vitamin C supplements, and avoid alcohol.",
      Gastroesophageal_Reflux_Disease:
        "Avoid trigger foods, eat smaller meals, and elevate the head of the bed.",
      Rhinosinusitis:
        "Use saline nasal sprays, avoid allergens, and take prescribed medications.",
      Obstructive_Sleep_Apnea:
        "Maintain a healthy weight, use a CPAP machine, and avoid alcohol and sedatives before bedtime.",
      Age_Related_Macular_Degeneration:
        "Eat a diet rich in leafy greens, take prescribed vitamins, and avoid smoking.",
      Cataracts:
        "Wear sunglasses to protect eyes from UV light, manage other health conditions like diabetes, and consider cataract surgery if needed.",
      Diabetic_Retinopathy:
        "Control blood sugar levels, manage blood pressure and cholesterol, and get regular eye exams.",
      Infections: "",
      Pancreatic_Cancer: "",
      Autoimmune_Diseases: "",
      Ulcers: "",
      Hypothyroidism: "",
      Heart_Diseases: "",
      Blood_Clotting_Disorders: "",
  
      Coronary_Heart_Disease:
        "To reduce coronary heart disease risk: maintain a healthy diet low in saturated fats and sugars, and engage in regular physical activity. Additionally, avoid smoking and manage stress effectively for optimal heart health.",
      Stomach_Cancer:
        "To reduce stomach cancer risk: avoid smoked, salted, or pickled foods, and include plenty of fruits, vegetables, and whole grains in your diet. Regular screening and treating H. pylori infections promptly also help in prevention.",
      Type_1_Diabetes:
        " monitor blood sugar levels closely with insulin therapy, maintain a balanced diet rich in whole grains, fruits, and vegetables, and exercise regularly to help regulate blood sugar levels and promote overall health.",
      Pancreatic_Cancer:
        "quit smoking, limit alcohol consumption, maintain a healthy weight through diet and exercise, and consider genetic counseling if there is a family history of the disease. Regular medical check-ups can aid in early detection and treatment.",
      Venous_Thromboembolism:
        "maintain physical activity during long periods of immobility (such as during travel), use compression stockings if at risk, and follow prescribed medications and treatments post-surgery to reduce clotting risks.",
      Peptic_Ulcers:
        "avoid excessive use of nonsteroidal anti-inflammatory drugs (NSAIDs) and aspirin, manage stress effectively, and treat Helicobacter pylori infection promptly if diagnosed.",
      Preeclampsia:
        " attend regular prenatal check-ups, maintain a healthy diet low in salt and high in fruits and vegetables, and promptly report any symptoms such as high blood pressure or swelling to your healthcare provider.",
      cancer:
        " maintain a healthy weight, avoid tobacco and limit alcohol consumption, eat a balanced diet rich in fruits, vegetables, and whole grains, and participate in regular physical activity. Additionally, und,ergo recommended screenings based on age and risk factors",
    };
  
    if (precautions[disease]) {
      document.getElementById("precaution-content").innerText =
        "Precautions for " + disease + ": " + precautions[disease];
    } else {
      document.getElementById("precaution-content").innerText =
        "Precautions for " + disease + " are not available.";
    }
  }
  function showDiseasePrediction() {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const bg = document.getElementById("blood-group").value;
    const bp = document.getElementById("bp").value;
    const sugar = document.getElementById("sugar").value;
    const asthama = document.getElementById("Asthma").value;
    const es = document.getElementById("es").value;
    const thyroid = document.getElementById("thyroid").value;
    const cancer = document.getElementById("cancer").value;
    const sd = document.getElementById("sd").value;
    const bpAge = parseInt(document.getElementById("bp-age").value);
    const sAge = parseInt(document.getElementById("s-age").value);
    const aAge = parseInt(document.getElementById("a-age").value);
    const esAge = parseInt(document.getElementById("es-age").value);
    const thyroidAge = parseInt(document.getElementById("thyroid-age").value);
    const cancerAge = parseInt(document.getElementById("cancer-age").value);
    const sdAge = parseInt(document.getElementById("sd-age").value);
  
    let tableContent = "<tr><th>Disease</th><th>Action</th></tr>";
    if (bg == "A+" && bp == "Yes" && bpAge >= 40) {
      tableContent += `<tr><td>'Coronary Heart Disease'</td><td><button type="button" onclick="showPrecaution('Coronary_Heart_Disease')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Stomach Cancer'</td><td><button type="button" onclick="showPrecaution('Stomach_Cancer')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "A+" && bpAge < 40) {
      tableContent += `<tr><td>'Type 1 Diabetes'</td><td><button type="button" onclick="showPrecaution('Type_1_Diabetes')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Autoimmune Diseases'</td><td><button type="button" onclick="showPrecaution('Type_1_Diabetes')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "A-" && sAge >= 35) {
      tableContent += `<tr><td>Cardiovascular Diseases'</td><td><button type="button" onclick="showPrecaution('Cardiovascular_Diseases')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Type 2 Diabetes'</td><td><button type="button" onclick="showPrecaution('Type_2_Diabetes')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "A-" && sAge >= 35) {
      tableContent += `<tr><td>'Cancer'</td><td><button type="button" onclick="showPrecaution('Cancer')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "B-" && sAge >= 40) {
      tableContent += `<tr><td>'Infections'</td><td><button type="button" onclick="showPrecaution('Infections')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Pancreatic Cancer'</td><td><button type="button" onclick="showPrecaution('Pancreatic Cancer')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Autoimmune Diseases'</td><td><button type="button" onclick="showPrecaution('Autoimmune Diseases')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Pancreatic Cancer'</td><td><button type="button" onclick="showPrecaution('Pancreatic_Cancer')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "B+" && aAge >= 40) {
      tableContent += `<tr><td>'Pancreatic Cancer'</td><td><button type="button" onclick="showPrecaution('Pancreatic_Cancer')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "B+" && aAge < 40) {
      tableContent += `<tr><td>'Venous Thromboembolism'</td><td><button type="button" onclick="showPrecaution('Venous_Thromboembolism')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "AB") {
      tableContent += `<tr><td>'Cardiovascular Diseases'</td><td><button type="button" onclick="showPrecaution('Coronary_Heart_Disease')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "AB-") {
      tableContent += `<tr><td>Heart Diseases'</td><td><button type="button" onclick="showPrecaution('Heart Diseases')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Autoimmune Diseases'</td><td><button type="button" onclick="showPrecaution('Autoimmune Diseases')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Cancer'</td><td><button type="button" onclick="showPrecaution('Cancer')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "O+") {
      tableContent += `<tr><td>'Peptic Ulcers'</td><td><button type="button" onclick="showPrecaution('Peptic_Ulcers')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Preeclampsia'</td><td><button type="button" onclick="showPrecaution('Preeclampsia')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Blood Clotting Disorders'</td><td><button type="button" onclick="showPrecaution('Blood Clotting Disorders')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Type 1 Diabetes'</td><td><button type="button" onclick="showPrecaution('Type_1_Diabetes')">Show Cause & Precaution</button></td></tr>`;
    }
    if (bg == "O-") {
      tableContent += `<tr><td>'Ulcers'</td><td><button type="button" onclick="showPrecaution('Ulcers')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Autoimmune Diseases'</td><td><button type="button" onclick="showPrecaution('Autoimmune_Diseases')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Stomach Cancer'</td><td><button type="button" onclick="showPrecaution('Stomach Cancer')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Hypothyroidism'</td><td><button type="button" onclick="showPrecaution('Hypothyroidism')">Show Cause & Precaution</button></td></tr>`;
    }
  
    if (bp == "Yes") {
      tableContent += `<tr><td>'Hyperaldosteronism'</td><td><button type="button" onclick="showPrecaution('Hyperaldosteronism')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Gordon_syndrome'</td><td><button type="button" onclick="showPrecaution('Gordon_syndrome')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Liddle_syndrome'</td><td><button type="button" onclick="showPrecaution('Liddle_syndrome')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'hypertension_and_brachydactyly_syndrome'</td><td><button type="button" onclick="showPrecaution('hypertension_and_brachydactyly_syndrome')">Show Cause & Precaution</button></td></tr>`;
    }
    if (sugar == "Yes") {
      tableContent += `<tr><td>'Monogenic_diabetes'</td><td><button type="button" onclick="showPrecaution('Monogenic_diabetes')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Cystic_fibrosis'</td><td><button type="button" onclick="showPrecaution('Cystic_fibrosis')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Hemochromatosis'</td><td><button type="button" onclick="showPrecaution('Hemochromatosis')">Show Cause & Precaution</button></td></tr>`;
    }
    if (asthama == "Yes") {
      tableContent += `<tr><td>'Gastroesophageal_Reflux_Disease'</td><td><button type="button" onclick="showPrecaution('Gastroesophageal_Reflux_Disease')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Rhinosinusitis'</td><td><button type="button" onclick="showPrecaution('Rhinosinusitis')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Obstructive_Sleep_Apnea'</td><td><button type="button" onclick="showPrecaution('Obstructive_Sleep_Apnea')">Show Cause & Precaution</button></td></tr>`;
    }
    if (es == "Yes") {
      tableContent += `<tr><td>'Age_Related_Macular_Degeneration'</td><td><button type="button" onclick="showPrecaution('Age_Related_Macular_Degeneration')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Cataracts'</td><td><button type="button" onclick="showPrecaution('Cataracts')">Show Cause & Precaution</button></td></tr>`;
      tableContent += `<tr><td>'Diabetic_Retinopathy'</td><td><button type="button" onclick="showPrecaution('Diabetic_Retinopathy')">Show Cause & Precaution</button></td></tr>`;
    }
    document.getElementById("disease-table").innerHTML = tableContent;
    localStorage.setItem("diseaseTable", tableContent);
    localStorage.setItem("userName", name);
    console.log(name);
    window.location.href = "./precautions.html";
  }
  function aboutus() {
    window.location.href = "./about.html";
  }
  function index() {
    window.location.href = "./index.html";
  }
  function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    detailsElement.classList.toggle("hidden");
  }
  