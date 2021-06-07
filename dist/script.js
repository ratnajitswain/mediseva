$(document).ready(function () {
  // executes when HTML-Document is loaded and DOM is ready

  $('button').each(function (index) {
    var logo = $(this).data('logo');
    $(this).find('.button-logo').attr('src', $(this).data('logo'));
  });

  $('#templateModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var modal = $(this);
    modal.find('.modal-title').text(button.data('title'));
    modal.find('.modal-title').text(button.data('title'));
    modal.find('.modal-customer').text(button.data('customer'));

    modal.find('.modal-logo').attr('src', button.data('logo'));
    modal.find('.modal-industry').text(button.data('industry'));
    modal.find('.modal-products').text(button.data('products'));
    modal.find('.modal-salesCycle').text(button.data('salesCycle'));
    modal.find('.modal-competition').text(button.data('competition'));
    modal.find('.modal-background').text(button.data('background'));
    modal.find('.modal-salesperson').text(button.data('salesperson'));
    modal.find('.modal-jobTitle').text(button.data('jobtitle'));
    modal.find('.modal-headshot').text(button.data('headshot'));
    modal.find('.modal-email').text(button.data('email'));
    modal.find('.modal-support').text(button.data('support'));
    modal.find('.modal-metrics').text(button.data('metrics'));
    modal.find('.modal-economicBuyer').text(button.data('economicBuyer'));
    modal.find('.modal-decisionCriteria').text(button.data('decisionCriteria'));
    modal.find('.modal-decisionProcess').text(button.data('decisionProcess'));
    modal.find('.modal-identifyPain').text(button.data('identifyPain'));
    modal.find('.modal-champion').text(button.data('champion'));
  });

  $('.DoctorSection').on('click', function () {
    $('.OpenSection').css({ 'background-color': '#BDD2DE', color: 'black' });
    $('.DoctorSection').css({ 'background-color': '#015C93', color: 'white' });
    $('.openForm').css('display', 'none');
    $('.doctorForm').css('display', 'initial');
  });

  $('.OpenSection').on('click', function () {
    $('.OpenSection').css({ 'background-color': '#015C93', color: 'white' });
    $('.DoctorSection').css({ 'background-color': '#BDD2DE', color: 'black' });
    $('.openForm').css('display', 'initial');
    $('.doctorForm').css('display', 'none');
  });

  // document ready
});
