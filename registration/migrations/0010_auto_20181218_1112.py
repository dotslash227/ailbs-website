# Generated by Django 2.1.3 on 2018-12-18 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0009_auto_20181214_2027'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='accompany',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='accompanying_age',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='accompanying_gender',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='accompanying_name',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='accompanying_title',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='amount',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='mode_of_payment',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='plan',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='status',
        ),
        migrations.RemoveField(
            model_name='anesthesiaregistration',
            name='txnid',
        ),
        migrations.AlterField(
            model_name='abstractsubmission',
            name='author1_name',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
