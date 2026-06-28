<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Inter', Arial, sans-serif; color: #1A1A2E; background: #F8F9FA; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; border: 1px solid #E5E7EB; overflow: hidden; }
        .header { background: #2563EB; padding: 32px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 700; }
        .body { padding: 32px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 11px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1A1A2E; }
        .message-box { background: #F8F9FA; border-radius: 12px; padding: 16px; border: 1px solid #E5E7EB; line-height: 1.6; }
        .footer { padding: 20px 32px; border-top: 1px solid #E5E7EB; font-size: 12px; color: #6B7280; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nouveau message de contact</h1>
        </div>
        <div class="body">
            <div class="field">
                <div class="label">Nom</div>
                <div class="value">{{ $data['name'] }}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">{{ $data['email'] }}</div>
            </div>
            <div class="field">
                <div class="label">Sujet</div>
                <div class="value">{{ $data['subject'] }}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="message-box">{{ $data['message'] }}</div>
            </div>
        </div>
        <div class="footer">
            Reçu via le formulaire de contact de MonProduit · {{ now()->format('d/m/Y H:i') }}
        </div>
    </div>
</body>
</html>
