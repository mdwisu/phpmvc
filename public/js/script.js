$(function () {
  $('.tombolTambahData').on('click', function () {
    $('#formModalLabel').html('Tambah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Tambah Data');
  });

  $('.tampilModalUbah').on('click', function () {
    $('#formModalLabel').html('Ubah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Ubah Data');
    $('.modal-body form').attr('action', 'http://192.168.64.2/phpmvc/public/mahasiswa/ubah')

    const id = $(this).data('id');

    $.ajax({
      url: 'http://192.168.64.2/phpmvc/public/mahasiswa/getubah',
      data: { id: id },
      method: 'post',
      success: function (data) {
        var dataParse = $.parseJSON(data);
        $('#nama').val(dataParse.nama);
        $('#nrp').val(dataParse.nrp);
        $('#email').val(dataParse.email);
        $('#jurusan').val(dataParse.jurusan);
        $('#id').val(dataParse.id);
      },
    });
  });
});
