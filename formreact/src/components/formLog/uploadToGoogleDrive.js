import { google } from 'googleapis';
import fs from 'fs';

const credentials = {
    client_id: '851788443965-40pqc6hkooeskdgos18jpp355k4f6hck.apps.googleusercontent.com',
    client_secret: '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',
    redirect_uris: ['YOUR_REDIRECT_URI'],
};

const oauth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uris[0]
);

// После аутентификации, получите access token и заполните его здесь
const accessToken = 'AIzaSyAWBKsVVz1fgtFU7XwhFqRHkCQ8WTNyjyw';

// Создайте экземпляр Google Drive API
const drive = google.drive({ version: 'v3', auth: oauth2Client });

// Загрузите фото на Google Drive
function uploadPhotoToDrive(filename) {
    const fileMetadata = {
        name: 'photo.jpg',
        parents: ['YOUR_FOLDER_ID'], // ID папки, в которую вы хотите загрузить фото
    };
    const media = {
        mimeType: 'image/jpeg',
        body: fs.createReadStream(filename),
    };

    drive.files.create(
        {
            resource: fileMetadata,
            media: media,
            fields: 'id, webViewLink',
        },
        (err, file) => {
            if (err) {
                console.error('Ошибка при загрузке файла:', err.message);
                return;
            }

            console.log('Файл успешно загружен на Google Drive!');
            console.log('Ссылка для скачивания файла:', file.data.webViewLink);
        }
    );
}

// Пример использования
uploadPhotoToDrive('path/to/photo.jpg'); // Укажите путь к файлу фотографии, который вы хотите загрузить
