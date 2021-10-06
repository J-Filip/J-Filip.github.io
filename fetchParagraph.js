// FETCH PARAGRAPH

async function createDesc(p){
    const response = await fetch(p);
    const blob = await response.blob();
    //console.log(blob);
    document.querySelector('.portfolio-item-individual').innerHTML = await blob.text();
  };
  
  createDesc('project_desc1.html');