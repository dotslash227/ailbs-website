# Generated by Django 2.1.3 on 2018-12-08 08:52

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0009_agenda'),
    ]

    operations = [
        migrations.AddField(
            model_name='agenda',
            name='day',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='agenda',
            name='date',
            field=models.DateField(default=datetime.datetime(2018, 12, 8, 8, 52, 34, 118081, tzinfo=utc)),
        ),
    ]
