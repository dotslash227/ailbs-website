# Generated by Django 2.1.3 on 2018-12-14 14:57

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0011_auto_20181213_1334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agenda',
            name='date',
            field=models.DateField(default=datetime.datetime(2018, 12, 14, 14, 57, 2, 949531, tzinfo=utc)),
        ),
    ]
