# Generated by Django 2.1.3 on 2018-12-18 05:48

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0013_auto_20181218_1112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agenda',
            name='date',
            field=models.DateField(default=datetime.datetime(2018, 12, 18, 5, 48, 4, 687673, tzinfo=utc)),
        ),
    ]
