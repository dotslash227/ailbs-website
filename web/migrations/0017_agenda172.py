# Generated by Django 2.1.3 on 2019-01-14 17:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0016_auto_20190112_1540'),
    ]

    operations = [
        migrations.CreateModel(
            name='Agenda172',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=django.utils.timezone.now)),
                ('time_range', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=150)),
                ('venue', models.CharField(max_length=150)),
                ('speaker', models.CharField(blank=True, max_length=150, null=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
    ]