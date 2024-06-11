import calendarIcon from '../assets/svg/calendar.js'
import euroIcon from '../assets/svg/euro.js'
import pctIcon from '../assets/svg/pct.js'
import eyeWhite from '../assets/svg/eye_white.js'
import { formatDate } from '../app/format.js'

export const modal = () => (`
  <div class="modal fade" id="modaleFileAdmin1" data-testid="modaleFileAdmin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Justificatif</h5>
          <button type="button" class="close" data-dismiss="modal" aria-span="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" data-toggle="modal">
        </div>
      </div>
    </div>
  </div>
  `)

export default (bill) => {

  return (`
    <div class="container dashboard-form" data-testid="dashboard-form">
      <div class="row">
        <div class="col-sm" id="dashboard-form-col1">
          <span class="bold-span">Type de dépense</span>
          <div class='input-field'> ${bill.type} </div>
          <span class="bold-span">Nom de la dépense</span>
          <div class='input-field'> ${bill.name} </div>
          <span class="bold-span">Date</span>
          <div class='input-field input-flex'>
            <span>${formatDate(bill.date)}</span>
            <span> ${calendarIcon} </span>
          </div>
        </div>
        <div class="col-sm" id="dashboard-form-col2">
          <span class="bold-span">Commentaire</span>
          <div class='textarea-field' style="height: 300px;"> ${bill.commentary} </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <span class="bold-span">Montant TTC </span>
          <div class='input-field input-flex'>
            <span data-testid="amount-d">${bill.amount}</span>
            <span> ${euroIcon} </span>
          </div>
        </div>
        <div class="col-sm">
          <labelclass="bold-span">TVA</span>
          <div id='vat-flex-container'>
            <div class='input-field input-flex vat-flex'>
              <span>${bill.vat}</span>
              <span> ${euroIcon} </span>
            </div>
            <div class='input-field input-flex vat-flex'>
              <span>${bill.pct}</span>
              <span> ${pctIcon} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <span class="bold-span">Justificatif</span>
            <div class='input-field input-flex file-flex'>
            <span id="file-name-admin">${bill.fileName}</span>
            <div class='icons-container'>
              <span id="icon-eye-d" data-testid="icon-eye-d" data-bill-url="${bill.fileUrl}"> ${eyeWhite} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
       ${bill.status === 'pending' ? (`
        <div class="col-sm">
          <span for="commentary-admin" class="bold-span">Ajouter un commentaire</span>
          <textarea id="commentary-admin" class="form-control blue-border" data-testid="commentary2" rows="5"></textarea>
        </div>
       `) : (`
        <div class="col-sm">
          <span class="bold-span">Votre commentaire</span>
          <div class='input-field'> ${bill.commentAdmin} </div>
        </div>
       `)}
      </div>
      <div class="row">
      ${bill.status === 'pending' ? (`
      <div class="col-sm buttons-flex" style="width: 300px;" >
        <button type="submit" id='btn-refuse-bill' data-testid='btn-refuse-bill-d' class="btn btn-primary">Refuser</button>
        <button type="submit" id='btn-accept-bill' data-testid='btn-accept-bill-d' class="btn btn-primary">Accepter</button>
      </div>
      `) : ''}
    </div>
    ${modal()}
    </div>
  `)
}