# Generated by Django 2.1.3 on 2019-01-09 07:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0012_auto_20190109_1246'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registration',
            name='amount',
        ),
        migrations.RemoveField(
            model_name='registration',
            name='mode_of_payment',
        ),
        migrations.RemoveField(
            model_name='registration',
            name='status',
        ),
        migrations.RemoveField(
            model_name='registration',
            name='txnid',
        ),
    ]
