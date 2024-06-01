import { ROUTES_PATH } from '../constants/routes.js'
import Logout from "./Logout.js"

export default class NewBill {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.store = store

    const formNewBill = this.document.querySelector(`form[data-testid="form-new-bill"]`)
    formNewBill.addEventListener("submit", this.handleSubmit)

    const file = this.document.querySelector(`input[data-testid="file"]`)
    file.addEventListener("change", this.handleChangeFile)

    this.fileUrl = null
    this.fileName = null
    this.billId = null

    new Logout({ document, localStorage, onNavigate })
  }

  //----------bug 3-- [Bug Hunt] - Bills------------
handleChangeFile = e => {
  e.preventDefault();
  // Récupère le fichier sélectionné
  const file = this.document.querySelector(`input[data-testid="file"]`).files[0];
  const fileInput = this.document.querySelector(`input[data-testid="file"]`);
  const filePath = e.target.value.split(/\\/g);
  const fileName = filePath[filePath.length - 1];
  // Récupère l'extension du fichier sans le point initial
  const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase()

  // Vérifie si l'extension est valide (jpg, jpeg ou png)
  this.validImage = (fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png');

  // Si l'extension n'est pas valide, affiche une alerte et réinitialise l'entrée de fichier
  if (!this.validImage) {
    alert('Veuillez uploader une image du format .jpg, .jpeg ou .png');
    fileInput.value = '';
  } else {
    // Si l'extension est valide, prépare les données du formulaire
    const formData = new FormData();
    const email = JSON.parse(localStorage.getItem("user")).email;
    formData.append('file', file);
    formData.append('email', email);
    this.formData = formData;
    this.fileName = fileName;
  }
};

handleSubmit = e => {
  e.preventDefault();
  console.log('e.target.querySelector(`input[data-testid="datepicker"]`).value', e.target.querySelector(`input[data-testid="datepicker"]`).value);
  const email = JSON.parse(localStorage.getItem("user")).email;
  const bill = {
    email,
    type: e.target.querySelector(`select[data-testid="expense-type"]`).value,
    name: e.target.querySelector(`input[data-testid="expense-name"]`).value,
    amount: parseInt(e.target.querySelector(`input[data-testid="amount"]`).value),
    date: e.target.querySelector(`input[data-testid="datepicker"]`).value,
    vat: e.target.querySelector(`input[data-testid="vat"]`).value,
    pct: parseInt(e.target.querySelector(`input[data-testid="pct"]`).value) || 20,
    commentary: e.target.querySelector(`textarea[data-testid="commentary"]`).value,
    fileUrl: this.fileUrl,
    fileName: this.fileName,
    status: 'pending'
  };

  // Vérifie si l'image est valide avant de soumettre le formulaire
  if (this.validImage) {
    this.store
      .bills()
      .create({
        data: this.formData,
        headers: {
          noContentType: true,
        },
      })
      .then(({ fileUrl, key }) => {
        this.billId = key;
        this.fileUrl = fileUrl;
      })
      .then(() => {
        this.updateBill(bill);
      })
      .catch((error) => console.error(error));
  }
};


  // not need to cover this function by tests
  /* istanbul ignore next */
  updateBill = (bill) => {
    if (this.store) {
      this.store
      .bills()
      .update({data: JSON.stringify(bill), selector: this.billId})
      .then(() => {
        this.onNavigate(ROUTES_PATH['Bills'])
      })
      .catch(error => console.error(error))
    }
  }
}