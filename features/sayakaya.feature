Feature: Test sayakaya

  Background:
      Given I am on the profile page

  @sayakaya-app
  Scenario Outline: Access <menu> account
    When I click <menu> account
    Then I expect <expected> text to be displayed
  
  Examples:
      | menu                | expected                    | 
      | Data Pribadi        | Verifikasi Akun Sekarang    | 
      | Ubah Kata Sandi     | Simpan                      |
      | Ubah Kode PIN       | 0                           |
      | Daftar Rekening     | Verifikasi Akun Sekarang    |
      | Profil Risiko       | Mulai Sekarang              |