# Generated by Django 3.2.6 on 2021-10-01 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_product_views'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
    ]
